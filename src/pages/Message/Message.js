import React from 'react'
import Sidebard from '../../component/Sidebar/Sidebard'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import './Message.css'
import { Avatar, Comment, Tooltip } from 'antd'
import { createElement, useState } from 'react'
import profile from '../../Assets/image/Messageprofile.png'

// Input Range
const drawerWidth = 220

function Message () {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  // const [action, setAction] = useState<string | null>(null);

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
              <div className='toperMessage rounded-1 bgmessage mt-5 w-auto px-2 py-3 '>
                <input
                  type='text'
                  placeholder='Search health Provider name '
                  className='py-1 w-25 w-sm-100 rounded ms-1'
                ></input>
                {/* TOp section */}
                <div className='mt-4'>
                  <h6 className='Today my-3'>Today</h6>
                  <div>
                    <div className='commentmainsection'>
                      <Comment
                        // actions={actions}
                        className=''
                        author={
                          <span className='name text-black'>Salman khan</span>
                        }
                        avatar={
                          <Avatar
                            src={profile}
                            alt='Profile'
                            className='mt-1'
                          />
                        }
                        content={
                          <p className='messageprog'>
                            Curabitur dictum mattis massa tortor risus. Enim
                            posuere posuere amet, ante auctor tellus est. Duis
                            scelerisque ornare elit orci
                          </p>
                        }
                        datetime={
                          <Tooltip title='2016-11-22 11:22:33'>
                            <span>8 hours ago</span>
                          </Tooltip>
                        }
                      />
                      <hr></hr>
                    </div>
                    <div className='commentmainsection'>
                      <Comment
                        // actions={actions}
                        className=''
                        author={
                          <span className='name text-black'>Salman khan</span>
                        }
                        avatar={
                          <Avatar
                            src={profile}
                            alt='Profile'
                            className='mt-1'
                          />
                        }
                        content={
                          <p className='messageprog'>
                            Curabitur dictum mattis massa tortor risus. Enim
                            posuere posuere amet, ante auctor tellus est. Duis
                            scelerisque ornare elit orci
                          </p>
                        }
                        datetime={
                          <Tooltip title='2016-11-22 11:22:33'>
                            <span>8 hours ago</span>
                          </Tooltip>
                        }
                      />
                      <hr></hr>
                    </div>
                    <div className='commentmainsection'>
                      <Comment
                        // actions={actions}
                        className=''
                        author={
                          <span className='name text-black'>Salman khan</span>
                        }
                        avatar={
                          <Avatar
                            src={profile}
                            alt='Profile'
                            className='mt-1'
                          />
                        }
                        content={
                          <p className='messageprog'>
                            Curabitur dictum mattis massa tortor risus. Enim
                            posuere posuere amet, ante auctor tellus est. Duis
                            scelerisque ornare elit orci
                          </p>
                        }
                        datetime={
                          <Tooltip title='2016-11-22 11:22:33'>
                            <span>8 hours ago</span>
                          </Tooltip>
                        }
                      />
                      <hr></hr>
                    </div>
                    <div className='commentmainsection'>
                      <Comment
                        // actions={actions}
                        className=''
                        author={
                          <span className='name text-black'>Salman khan</span>
                        }
                        avatar={
                          <Avatar
                            src={profile}
                            alt='Profile'
                            className='mt-1'
                          />
                        }
                        content={
                          <p className='messageprog'>
                            Curabitur dictum mattis massa tortor risus. Enim
                            posuere posuere amet, ante auctor tellus est. Duis
                            scelerisque ornare elit orci
                          </p>
                        }
                        datetime={
                          <Tooltip title='2016-11-22 11:22:33'>
                            <span>8 hours ago</span>
                          </Tooltip>
                        }
                      />
                      <hr></hr>
                    </div>
                    <div className='commentmainsection'>
                      <Comment
                        // actions={actions}
                        className=''
                        author={
                          <span className='name text-black'>Salman khan</span>
                        }
                        avatar={
                          <Avatar
                            src={profile}
                            alt='Profile'
                            className='mt-1'
                          />
                        }
                        content={
                          <p className='messageprog'>
                            Curabitur dictum mattis massa tortor risus. Enim
                            posuere posuere amet, ante auctor tellus est. Duis
                            scelerisque ornare elit orci
                          </p>
                        }
                        datetime={
                          <Tooltip title='2016-11-22 11:22:33'>
                            <span>8 hours ago</span>
                          </Tooltip>
                        }
                      />
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  )
}

export default Message
