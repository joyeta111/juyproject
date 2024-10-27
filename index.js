*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins',sans-serif;
}

html,body{
    display: grid;
    height: 100%;
    place-items: center;
    background: #000;
}

.wrapper{
    height: 100px;
    width: 360px;
    cursor: default;
    background: red;
    border-radius: 10px;
    animation: animate 1.5s linear infinite;
}

.wrapper .display{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background: black;
    height: 85px;
    width: 345px;
    border-radius: 6px;
    text-align: center;
}

.wrapper .display #time{
    line-height: 85px;
    color: #fff;
    font-size: 70;
    font-weight: 900;
    letter-spacing: 1px;
    background: red;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animate: animate 1.5s linear infinite;
}