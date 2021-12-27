import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const index = ()=> {
  return (
    
    <>
      <TyperWrap>
        <Typewriter
            options={{
                strings: ['﹤ PORTFOLIO／﹥', `﹤ I'm Front-End Developer／﹥`, `﹤ I'm Web Developer／﹥`],
                autoStart: true,
                loop: true,
                delay : 70,
                deleteSpeed : 30,
                pauseFor : 3000,
            }}
        />
      </TyperWrap>
    </>

  )
}

const TyperWrap = styled.section`
    display: block;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
      .Typewriter__wrapper{
          color: #000;
          font-size: 66px;
      }
      .Typewriter__cursor{
          color: #000;
          font-size: 74px;
      }
    @media screen and (max-width: 768px) { 
        display: inline-block; width: auto;
        top: 48%; letter-spacing: -1px;
        .Typewriter__wrapper{
          font-size: 26px;
        }
        .Typewriter__cursor{
            font-size: 30px;
        }
    }
`

export default index