import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import Dataanim from '../../Assets/icons/98195-loader.json'
import axios from 'axios'
import Sidebard from '../../component/Sidebar/Sidebard'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { useNavigate } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import { styled } from '@mui/material/styles'
import './TOS.css'

const drawerWidth = 220
function TOS () {
  const [Loading, setLoading] = useState(true)
  const [dataget, setdataget] = useState()
  const [datas, setdatas] = useState()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dataanim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  // Main fuction of the compount
  const apicall = () => {
    axios.get('/admin/tos', {
        headers: {
          secretKey:
            'rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD',
          Authorization: `Bearer ${localStorage.getItem('access_key')}`
        }
      })
      .then(res => {
        setdataget(res.data.text)
        setdatas(res.data._id)
        let textvalue = res.data.text
        console.log();
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        //    setLoading(false);
      })
  }
    // sessionStorage.set("idtos", res.data.text);
  useEffect(() => {
    apicall()
    setLoading(true)
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <div className='bg'>
        <div className=''>
          <Box sx={{ display: 'flex' }}>
            <Sidebard />
            <AppBar
              className='fortrans'
              position='fixed'
              sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
              }}
            ></AppBar>
            <Box
              className=''
              sx={{
                flexGrow: 1,
                my: 5,
                mx: 1,
                width: { sm: `calc(100% - ${drawerWidth}px)` }
              }}
            >
              {Loading ? (
                <Lottie options={defaultOptions} height={400} width={400} />
              ) : (
                <div className='mt-5'>
                  <div className='container-fluid'>
                    
                    <div className=''>
                      <div className='d-flex px-4'>
                        <h6 className='FAQsummary fontfamilyInter my-auto'>
                          Terms Of Services
                        </h6>
                        <button
                          className='updatetos fontfamilyInter  ms-auto my-auto border-0 '
                          onClick={() => {
                            navigate(`/TOSEdit/${datas}`)
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className='updatetos fontfamilyInter  ms-auto my-auto border-0 '
                          onClick={() => {
                            navigate(`/Addtos`)
                          }}
                        >
                          Add
                        </button>
                      </div>
                     
                  
                          <div>
                          <div className='forbg-everyone bg-white rounded p-4 mt-3'>
                            <p
                              className='fortermofservicesp fontfamilyInter'
                          
                            >
                              
                                   {
                                     dataget
                                   }
                              {
                                  sessionStorage.setItem("idtos", dataget)
                                  // console.log(sessionStorage.getItem("idtos"))
                              }
                          
                            </p>
                          </div>
                          </div>
                     
                      
                    </div>
                    
                  </div>
                </div>
              )}
            </Box>
          </Box>
        </div>
      </div>
    </>
  )
}

export default TOS
