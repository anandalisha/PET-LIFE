import React from "react";
import "../../Styles/UserPages/Dashboard.css";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="container">
      <div>
        <Link to="/dashboard/my-bookings">
          <div className="avatar avatar--green">
            <div className="avatar-body body--green">
              <div className="avatar-eye eye--left">
                <div className="avatar-eye-pupil pupil--purple">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>
              <div className="avatar-eye eye--right">
                <div className="avatar-eye-pupil pupil--purple">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>{" "}
              <div className="avatar-smile" />
              <div className="avatar-tooth tooth--left" />
              <div className="avatar-tooth tooth--right" />
            </div>
          </div>{" "}
        </Link>
        <p>My Bookings</p>
      </div>

      <div>
        <Link to="/dashboard/my-pets">
          <div className="avatar avatar--orange">
            <div className="avatar-body avatar-body--round body--pink">
              <div className="avatar-horn horn--right" />
              <div className="avatar-horn horn--left" />
              <div className="avatar-eye avatar-eye--orange eye--center">
                <div className="avatar-eye-pupil pupil--orange">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>

              <div className="avatar-smile">
                <span className="avatar-tongue" />
              </div>
            </div>
          </div>{" "}
        </Link>
        <p>My Pets</p>
      </div>
      <div>
        <div className="avatar avatar--pinkish">
          <Link to="/dashboard/my-pets">
            <div className="avatar-body body--violet">
              <div className="avatar-eye avatar-eye--magenta eye--left">
                <div className="avatar-eye-pupil pupil--purple">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>
              <div className="avatar-eye avatar-eye--magenta eye--right">
                <div className="avatar-eye-pupil pupil--purple">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>
              <div className="avatar-smile" />
            </div>
          </Link>
        </div>
        <p>My Profile</p>
      </div>
      <div>
        <div className="avatar avatar--blue">
          <Link to="/update-password">
            <div className="avatar-body body--darkPink">
              <div className="avatar-eye avatar-eye--green eye--left">
                <div className="avatar-eye-pupil pupil--green">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>
              <div className="avatar-eye avatar-eye--violet eye--right">
                <div className="avatar-eye-pupil pupil--pink">
                  <span className="avatar-eye-pupil-blackThing">
                    <span className="avatar-eye-pupil-lightReflection" />
                  </span>
                </div>
              </div>
              <div className="avatar-tooth tooth--right" />
              <div className="avatar-smile" />
            </div>
          </Link>
        </div>
        <p>Change Password</p>
      </div>
      <div>
        <div className="avatar avatar--magenta">
          <div className="avatar-body body--pinkishViolet">
            <div className="avatar-eye eye--center">
              <div className="avatar-eye-pupil pupil--purple">
                <span className="avatar-eye-pupil-blackThing">
                  <span className="avatar-eye-pupil-lightReflection" />
                </span>
              </div>
            </div>
            <div className="avatar-smile" />
          </div>
        </div>
        <p>Delete Profile</p>
      </div>
      <div>
        <div className="avatar avatar--skyBlue">
          <div className="avatar-body body--limeGreen">
            <div className="avatar-ear ear--left">
              <span className="avatar-signal" />
            </div>
            <div className="avatar-ear ear--right">
              <span className="avatar-signal" />
            </div>
            <div className="avatar-eye avatar-eye--green eye--center-top">
              <div className="avatar-eye-pupil pupil--limeGreen">
                <span className="avatar-eye-pupil-blackThing">
                  <span className="avatar-eye-pupil-lightReflection" />
                </span>
              </div>
            </div>
            <div className="avatar-smile" />
          </div>
        </div>{" "}
        <p>Register Complaint</p>
      </div>
    </div>
  );
};

export default Dashboard;
