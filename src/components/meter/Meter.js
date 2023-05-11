import "./Meter.css";

function Meter(props) {
  return (
    <div id="meter">
      <div id="scores">
        <div id="score_1" className="score"></div>
        <div id="score_2" className="score"></div>
        <div id="score_3" className="score"></div>
        <div id="score_4" className="score"></div>
        <div id="score_5" className="score"></div>
        <div id="score_6" className="score"></div>
        <div id="score_7" className="score"></div>
        <div id="needle" style={{ top: props.top }}></div>
      </div>
      <div id="status">
        <div className="status_item">
          <h2>SUPER!</h2>
        </div>
        <div className="status_item">
          <h2>GOOD</h2>
        </div>
        <div className="status_item">
          <h2>BETTER</h2>
        </div>
        <div className="status_item">
          <h2>OK</h2>
        </div>
        <div className="status_item">
          <h2>WORSE</h2>
        </div>
        <div className="status_item">
          <h2>BAD</h2>
        </div>
        <div className="status_item">
          <h2>AYE!</h2>
        </div>
      </div>
    </div>
  );
}

export default Meter;
