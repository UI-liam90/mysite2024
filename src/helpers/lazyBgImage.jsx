// import  { useState, useRef, useEffect } from "react";
// import { getImage } from "gatsby-plugin-image";

// export const LazyBgImage = ({ file, className, children }) => {
//     const [bgImg, setBgImg] = useState(null);
//     const elRef = useRef();
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 const entry = entries[0];
//                 if (entry.isIntersecting) {
//                     if (file) {
//                         if (file.localFile.extension === "svg") {
//                             setBgImg({ backgroundImage: `url("${file.localFile.publicURL}")` });
//                         } else {
//                             let imageSrc = getImage(file.localFile);
//                             setBgImg({ backgroundImage: `url("${imageSrc.images.fallback.src}")` });
//                         }
//                     }

//                     observer.unobserve(elRef.current);
//                 }
//             },
//             {
//                 rootMargin: "100px",
//             }
//         );
//         observer.observe(elRef.current);
//     }, [file]);
//     if (file) {
//         return (
//             <div ref={elRef} className={`lazyloadbg ${className}`} style={bgImg}>
//                 {children}
//             </div>
//         );
//     } else {
//         return (
//             <div ref={elRef} className={`lazyloadbg ${className}`}>
//                 {children}
//             </div>
//         );
//     }
// };
