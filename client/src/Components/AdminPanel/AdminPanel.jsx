import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCuriosities from './AddCuriosities';
import AddNews from './AddNews';
import ResponsiveAppBar from "../NavBar/Nav"
import swal from "sweetalert"
import './AdminPanel.modules.css'


const AdminPanel = () => {
    let navigate = useNavigate();
    const [user, setUset] = useState(
        JSON.parse(localStorage.getItem("actualUser"))
        ? JSON.parse(localStorage.getItem("actualUser"))
        : [],
      )


      function disableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

    useEffect(() => {
        if(!user.isAdmin) {
            disableScroll()
                swal({
                    title: 'Main page',
                    text: 'You dont have the permissions',
                    type: 'Alert',
                    buttons: {
                      confirm: {
                        text: 'Confirmar',
                        value: 'confirm',
                      },
                    },
                  }).then((val) => {
                    if (val === 'confirm') {
                      navigate('/')
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
            }
    }, [disableScroll])

    if (!user.isAdmin) {
        return ( 
            <div className='bloqueado'>
              <div className='containerContentPanel'></div>
                <ResponsiveAppBar />
                <AddNews />
                <br />
                <AddCuriosities />
            </div>
         );
    } else {
        return ( 
            <div className='containerPanel'   >
              {/* <ResponsiveAppBar /> */}
              <div className='containerContentPanel'>
                <AddNews />
                <AddCuriosities />
              </div>
            </div>
         );
    }
}
 
export default AdminPanel;