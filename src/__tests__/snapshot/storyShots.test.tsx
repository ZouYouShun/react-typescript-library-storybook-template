import initStoryshots, {
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';
import renderer from 'react-test-renderer';

import { excludeSnapshot } from './excludeSnapshot';
import { isExcluded } from './utils';
import path from 'path';

// * for storybook know that is TEST env, not render some elements
(global as any).TEST_ENV = true;

/** above is mock block */

const tested = new Set();

function createNodeMock(element: any) {
  return document.createElement(element.type);
}

function isTested(story: any) {
  const hash = `${story.kind} ${story.name}`;
  if (tested.has(hash)) {
    return true;
  }
  tested.add(hash);
  return false;
}

initStoryshots({
  test: ({ story, context }) => {
    if (isExcluded(story.kind, story.name, excludeSnapshot)) {
      return;
    }
    if (isTested(story)) {
      return;
    }

    const converter = new Stories2SnapsConverter({
      snapshotExtension: '.tsx.snap',
    });

    const snapshotFilename = converter.getSnapshotFileName(context);

    const storyElement = story.render();
    const wrapper = renderer.create(storyElement, { createNodeMock });
    expect(wrapper.toJSON()).toMatchSpecificSnapshot(
      path.join(__dirname, '../../', snapshotFilename),
    );
  },
});
