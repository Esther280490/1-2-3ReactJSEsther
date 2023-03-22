import React from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class';

const TaskComponent=({task})=> {
  return (
    <div>
        <h2>
            Nombre:{task.name}
        </h2>
        <h2>
            lastname:{task.lastname}
        </h2>
        <h2>
            email:{task.email}
        </h2>
       
        <h5>
            This task is:{task.connected ? 'CONNECTED':'PENDING'}
        </h5>
        <h3>
            Descripción:{task.description}
        </h3>
        <h4>
            Level:{task.level}
        </h4>
        <h5>
            This task is:{task.completed ? 'COMPLETED':'PENDING'}
        </h5>
      
    </div>
  );
};

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)

};

export default TaskComponent;

