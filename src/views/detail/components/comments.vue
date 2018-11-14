<template>
<div>
    <ul class="comments"> 
        <router-link v-for="(item,index) in commentsList" :key="index" tag="li" to="/detail/commentDetail">
            <div class="comments_top">
                <div class="headbox">
                    <img :src="item.user_avatar" alt="">
                </div>
                <div class="name">
                    <p>{{item.user_name}}</p>
                    <p>{{item.add_time}}</p>
                </div>
                <div class="zan">
                    <i class="iconfont icon-zan"></i>&nbsp;<span>{{item.up_num}}</span>
                </div>
            </div>
            <div class="content">{{item.comment_content}}</div>
            <div class="imgs">
                <div class="itemimgbox" v-for="(img_item,img_index) in item.comment_images" :key="img_index" v-if="img_index<3"
                    :style="{backgroundImage: 'url('+img_item+')'}"
                > 
                </div>
            </div>
            <div class="reply"><span>官方回复：</span> {{item.reply_content}}</div>
        </router-link>
    </ul>
    <router-link class="more" tag="div" to="/detail/comment">更多评论<i class="iconfont icon-youjiantou"></i></router-link>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState('details',[
            'commentsList'
        ])
    }
}; 
</script>

<style lang="less" scoped>
.comments{
    white-space: nowrap;
    width: 100%;
    height: 6.6rem;
    overflow-x: scroll;
    padding-right: .426667rem;
    box-sizing: border-box;
    &::-webkit-scrollbar{
        display: none;
    }
    li{
        display: inline-block;
        width:8.186667rem;
        height: 6.506667rem;
        margin-left: .426667rem;
        background-color: #fafafa;
        border:1px solid #f1f1f1;
        border-radius: 4px;
        box-sizing: border-box;
        padding:.426667rem;
        vertical-align: top;
        .comments_top{
            height: .906667rem;
            margin-bottom: .213333rem;
            .headbox{
                width: .906667rem;
                height: 0.906667rem;
                border-radius: 50%;
                overflow: hidden;
                float:left;
                margin-right: .213333rem;
                img{
                    width: 100%;
                }
            }
            .name{
                float:left;
                font-size: .373333rem;
                p:nth-child(2){
                    font-size: .32rem;
                }
            }
            .zan{
                float:right;
            }
        }
        .imgs{
            width: 100%;
            overflow: hidden;
            margin:.266667rem 0;
            .itemimgbox{
                width:2.266667rem;
                height:1.733333rem;
                border-radius: 6px;
                display: inline-block; 
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;
                background-color: #000;
                margin-right: .16rem;
            }
        }
        .content{
            font-size: .373333rem;
            width:100%;
            white-space: normal;
            overflow: hidden; 
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow:hidden;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical; 
            line-height: .48rem;
        }
        .reply{
            font-size: .373333rem;
            white-space: normal;
            overflow: hidden; 
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow:hidden;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            line-height: .48rem;
            span{
                color:#ff6700;
            }
        }
    }
}
.more{
    color: #4e72a5;
    font-size: .426667rem;
    text-align: center;
    line-height: 1.333333rem;
}
</style>