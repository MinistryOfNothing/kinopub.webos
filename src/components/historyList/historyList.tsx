import React from 'react';
import cx from 'classnames';
import map from 'lodash/map';

import { HistoryItem } from 'api';
import Scrollable from 'components/scrollable';
import Title from 'components/title';
import VideoItem from 'components/videoItem';

type Props = {
  title?: React.ReactNode;
  items?: HistoryItem[];
  loading?: boolean;
  onScrollToEnd?: () => void;
  scrollable?: boolean;
  className?: string;
  titleClassName?: string;
};

const HistoryList: React.FC<Props> = ({ title, items, loading, onScrollToEnd, scrollable = true, className, titleClassName }) => {
  const content = (
    <div>
      <Title className={titleClassName}>{title}</Title>
      <div className={cx('flex flex-wrap', className)}>
        {map(items, ({ item, media, last_seen }) => (
          <VideoItem key={last_seen} item={item}>
            {media.snumber > 0 && (
              <div className="absolute top-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center">
                {`s${media.snumber}e${media.number}`}
              </div>
            )}
          </VideoItem>
        ))}
        {loading && map([...new Array(15)], (_, idx) => <VideoItem key={idx} />)}
      </div>
    </div>
  );

  return scrollable ? <Scrollable onScrollToEnd={onScrollToEnd}>{content}</Scrollable> : content;
};

export default HistoryList;
