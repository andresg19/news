import React from 'react';
import AddCuriosities from './AddCuriosities';
import AddNews from './AddNews';

const AdminPanel = () => {
    return ( 
        <div>
            <AddNews />
            <br />
            <AddCuriosities />
        </div>
     );
}
 
export default AdminPanel;