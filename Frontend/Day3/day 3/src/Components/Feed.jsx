// feed.jsx
import '../Style/Feed.css';


const Feed = () => {
  return (
    <div className="feedback-container">
      <div className="rating-div">
        <h4 className="title-feedback1">Please Rate Our Website</h4>
        <div className="smiley">
          {/* <span className="smiley-open"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/dead_tminl7.png" alt="Smiley Open" /></span> */}
          <span className="smiley-close"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/dead-active_gcseca.png" alt="Smiley Close" /></span>
        </div>
        <div className="smiley">
          {/* <span className="smiley-open"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad_il7kmb.png" alt="Smiley Open" /></span> */}
          <span className="smiley-close"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sad-active_rhibzn.png" alt="Smiley Close" /></span>
        </div>
        <div className="smiley">
          {/* <span className="smiley-open"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic_we1bxv.png" alt="Smiley Open" /></span> */}
          <span className="smiley-close"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184410/sceptic-active_kez7sa.png" alt="Smiley Close" /></span>
        </div>
        <div className="smiley">
          {/* <span className="smiley-open"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy_f53bgi.png" alt="Smiley Open" /></span> */}
          <span className="smiley-close"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/more-happy-active_d2hget.png" alt="Smiley Close" /></span>
        </div>
        <div className="smiley">
          {/* <span className="smiley-open"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy_kakekm.png" alt="Smiley Open" /></span> */}
          <span className="smiley-close"><img src="http://res.cloudinary.com/dxssokt4h/image/upload/v1507184409/happy-active_fs6ztw.png" alt="Smiley Close" /></span>
        </div>
      </div>
      <div className="qa-div">
        <h4 className="title-feedback2">What Could Be Better?</h4>
        <div className="question">
          <div className="row">
            <div className="col-md-4">
              <a href="javascript:;">Navigation Experience</a>
            </div>
            <div className="col-md-4">
              <a href="javascript:;">Overall Experience</a>
            </div>
            <div className="col-md-4">
              <a href="javascript:;">Website Look & Feel</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4">
              <a href="javascript:;">Information Availability</a>
            </div>
            <div className="col-md-4"> </div>
          </div>
        </div>
      </div>
      <div className="comment-div">
        <h4 className="title-feedback">Comments / Suggestions?</h4>
        <textarea rows="8"></textarea>
      </div>
      <div className="submit-btn">
        <a href="#">Submit</a>
      </div>
    </div>
  );
};

export default Feed;
