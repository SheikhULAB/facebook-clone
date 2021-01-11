import React from 'react';
import './StoryReel.css';
import Story from './Story';
const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="sheikh yeamin"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="salmon khan"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="iron man"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="bat man"
            />
            <Story
                image={img}
                profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                title="spiderman"
            />
          
        </div>
    );
};

export default StoryReel;