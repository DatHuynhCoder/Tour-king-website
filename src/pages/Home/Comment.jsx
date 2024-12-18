import React, {useState, useContext, useEffect} from 'react'

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import axios from 'axios';
import { ContextStore } from '../../context/Context';
import { toast } from 'react-toastify';

import DefaultAvatar from '../../assets/defaultAvatar.png'
import './Comment.scss'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Comment() {
  const {
      accessToken, setAccessToken,
      refreshToken, setRefreshToken,
      userid, setUserid,
      name, setName,
      isAdmin, setIsAdmin,
      useravatarurl, setUseravatarurl
    } = useContext(ContextStore)
  const [comment, setComment] = useState('')
  const [listComments, setListComments] = useState([])

  const getComment = async () => {
    axios.get('http://localhost:8800/get-comment').then(res => {
      console.log('check comment: ', res.data)
      setListComments(res.data)
    })
  }

  useEffect(() => {
    getComment();
  }, [])
  return (
    <div className="comment-container">
      <div class="comment-input-container">
        <input
          placeholder="Nhập đánh giá của bạn tại đây"
          class="comment-input-field" type="text"
          style={{ border: '1px solid black' }}
          onChange={(e) => setComment(e.target.value)}
        />
        <label
          for="comment-input-field"
          class="comment-input-label"
        >
          Nhập đánh giá của bạn tại đây
        </label>
        <span class="comment-input-highlight"></span>
      </div>
      <div style={{ padding: 20 }}>
        <button
          style={{ paddingLeft: 10, paddingRight: 10, borderRadius: 10, boxShadow: '4px 4px' }}
          onClick={() => {
            if (!accessToken) {
              toast.error('Đăng nhập để để lại đánh giá !')
            }
            else {
              if (comment === '') {
                toast.warning('Phần comment không được để trống')
              }
              else {
                const date = new Date();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                const commentdate = `${year}-${month}-${day}`;
                axios.post('http://localhost:8800/add-comment', {
                  MaNguoiDung: userid,
                  NoiDung: comment,
                  NgayBinhLuan: commentdate
                }).then(res => {
                  if (res.data.Status === 'Success') {
                    toast.success('Đánh giá thành công !')
                    console.log('insert comment successfully !')
                    getComment();
                  }
                  else {
                    console.log('error when trying to insert comment')
                  }
                })
              }
            }
          }}
        >Gửi</button>
      </div>
      <div style={{padding: 20}}>
        {
          listComments.length > 0 && listComments.map((comment) => {
            return <div style={{padding: 5, border: '2px solid black', marginBottom: 5, boxShadow: '5px 5px', backgroundColor: 'white'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={comment.Avatar ? comment.Avatar : DefaultAvatar} alt="avatar" style={{width: '40px', height: '40px', borderRadius: 25}}/>
                <div style={{lineHeight: '100%', alignItems: 'center'}}>{comment.TenDayDu === '' ? 'Anonymous User' : comment.TenDayDu}</div>
              </div>
              <div style={{opacity: 0.8, marginRight: '20px'}}>
                {comment.NgayBinhLuan.slice(0, 10)}
              </div>
              <div>
                {comment.NoiDung}
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

      