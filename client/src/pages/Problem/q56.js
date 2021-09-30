import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Input from "../../components/Input";
import Navigation from "../../components/Navigation";
// import Choices from "../../components/Choices";

export default function Q56() {
  let firstItem = useRef(null);
  let secondItem = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(firstItem, 2, { delay: 1, opacity: 0 })
      .to(firstItem, 1, { delay: 16, opacity: 0, display: "none" })
      .from(secondItem, 1, { delay: 0.3, opacity: 0, display: "none" });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition" noanim />
      <div className="flex justify-center items-center h-screen w-full">
        <div
          className="flex text-center max-w-screen-sm px-5 md:px-0"
          ref={(el) => {
            firstItem = el;
          }}
        >
          <h1 className=" font-medium text-gray-700 text-xl leading-loose">
            เป็นเรื่องธรรมดามากทคนเราจะรู้สึกถึงอารมณ์โกรธที่ปะทุอยู่ภายในใจ
            คนส่วนใหญ่อาจจะไม่ได้เป็นแบบนั้นตลอดเวลา
            แต่ว่าการที่เรามีโทสะมากกว่าคนอื่นก็ไม่ได้เป็นเรื่องผิดเสมอไป
            ไม่มีใครตัดสินเราได้ถ้าเราไม่ตัดสินตัวเองไปก่อน
            (และเรายังไม่ได้แสดงพฤติกรรมออกไป) ส่วนสำคัญคือการที่คุณรู้ตัวเอง
            อยากให้คุณลองใช้เวลานี้ในการนึกเรื่องราวที่ผ่านมา
          </h1>
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
          className="flex flex-grow justify-center items-center"
        >
          <Input
            title="คุณเคยรู้ตัวเองเมื่ออารมณ์คุณเดือดขึ้นมาหรือไม่ ตอนไหนบ้าง"
            subtitle=""
            q1=""
            q2="ต่อไป"
            r1=""
            r2="/Problem/q40"
            s1=""
            s2=""
          />
        </div>
      </div>
    </motion.div>
  );
}
