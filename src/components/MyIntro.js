// import { useState,useEffect } from "react";
// import { Container,Row,Col } from "react-bootstrap"
// import {ArrowRightCircle} from "react-bootstrap-icons"
// import headerImg from "../Assets/header-img.svg";


// export const MYintro=()=>{

// const [loopNum, setLoopNum] = useState(0);
// const [isDeleting, setIsDeleting] = useState(false);
// const [index, setIndex] = useState(1);
// const toRotate = [ "Graphic Designer", "Illustration Expert", "UI/UX Designer" ];
// const period=2000;
// const [delta, setDelta] = useState(300 - Math.random() * 100);
// const [text, setText] = useState('');

// useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }
//     if (!isDeleting && updatedText === fullText) {
//         setIsDeleting(true);
//         setIndex(prevIndex => prevIndex - 1);
//         setDelta(period);
//       } else if (isDeleting && updatedText === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setIndex(1);
//         setDelta(500);
//       } else {
//         setIndex(prevIndex => prevIndex + 1);
//       }
//     }

//     return(
//     <section className="intro" id="home">
//         <Container>
//             <Row className="allign-item-center">
//                 <Col xs={12} md={6} xl={7}>
//                     <span className="tagline">Welcome to my Portfolio</span>
//                     <h1>{"Hi this is the team."} <span className="wrap"></span> </h1>
//                     <h1>{"We are "}{text}</h1>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi a labore soluta laborum pariatur vitae nemo eaque. Perspiciatis, sequi! Velit recusandae eveniet, aut repudiandae sapiente natus nobis porro voluptate!</p>
//                     <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//                 </Col>
//                 <Col xs={12} md={6} xl={7}>
//                     <img src={headerImg} alt="Header Img"/> 
//                 </Col>
//             </Row>

//         </Container>
//     </section>

//     )
// }