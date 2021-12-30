import styled from 'styled-components';

export const Container = styled.div`
    width : 1400px ; margin : 0 auto; 
`


export const ImageBox = styled.article`
    margin-bottom : 30px; box-shadow : 3px 3px 5px #dcdcdc ; border: 1px solid #efefef;
    background:white;
    img{ width : 400px}
    h3{font-size : 30px ; color:tomato; margin-bottom : 20px; padding : 0 15px}
    ul{
        margin-bottom : 20px; padding : 0 15px;
        li{
            margin-bottom : 5px;
        }
    }
    p {
        margin-bottom: 25px;
        span {
            display:inline-block;
            background:#efefef;
            margin-right : 10px;
            border-radius : 15px;
        }
    }
`

export const ImageForm = styled.form`
    text-align:center; padding : 25px 0;
    div{
        input{
            width : 400px;
            height : 45px;
            box-sizing : border-box;border : 1px solid #999;
            outline : none;
        }
        button {
            width : 120px; height : 45px ; background : #000 ; color : #fff; vertical-align : top ; border:none;
        }
    }
`