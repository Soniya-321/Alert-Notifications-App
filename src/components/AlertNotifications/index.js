// Write your code here
import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'
const AlertNotifications = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">Alert Notifications</h1>
      <Notification>
        <div className="first-container">
          <AiFillCheckCircle className="sucess-icon" />
          <div className="text">
            <h1 className="sucess-heading">Success</h1>
            <p className="para">You can access all the files in the folder</p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="first-container">
          <RiErrorWarningFill className="error-icon" />
          <div className="text">
            <h1 className="error-heading">Error</h1>
            <p className="para">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
        
      </Notification>
      <Notification>
        <div className="first-container">
          <MdWarning className="warning-icon" />
          <div className="text">
            <h1 className="warning-heading">Warning</h1>
            <p className="para">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
        
      </Notification>
      <Notification>
        <div className="first-container">
          <MdInfo className="info-icon" />
          <div className="text">
            <h1 className="info-heading">Info</h1>
            <p className="para">Anyone on the internet can view these files</p>
          </div>
        </div>
        
      </Notification>
    </div>
  )
}

export default AlertNotifications
