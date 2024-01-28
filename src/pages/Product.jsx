import React from "react";
import MainLayout from "../Layouts/MainLayout";
import ดอกไม้ from './2.jpg';
import ชมพู from './ชมพู.jpg';
import ตกแต่งมุก from './ตกแต่งมุก.jpg';
import สายมุก from './สายมุก.jpg';
import สาย from './สาย.jpg';
import สายเปีย from './สายเปีย.jpg';

const Product = (props) => {
  const product = [
    {
      image: ดอกไม้,
      name: "Daisy: กระเป๋าสานทรงดอกไม้",
      price: "1,290.-",
      details: "กระเป๋าสาน ทำจากผักตบชวา บุผ้า มีซิป รูดปิดได้ วัสดุแข็งแรง แน่นหนา ไม่อ่อนยวบ",
    },
    {
      image: ชมพู,
      name: "Tina: กระเป๋าสานทรงถัง ผ้าบุลาย ขาว ชมพูเข้ม",
      price: "890.-",
      details: "กระเป๋าสานทรงถัง ผ้าบุลาย ขาว ชมพูเข้มกระเป๋าใบนี้น่ารักมาก เหมาะกับช่วงฤดูร้อน และถ่ายรูปสวยๆ",
    },
    {
      image: ตกแต่งมุก,
      name: "กระเป๋าสาน ผักตบชวา ตกแต่งมุก กระเป่าปักมุก pearl bag straw bag",
      price: "880.-",
      details: "เท่ห์ สวย มีสไตล์ Big Bangle กำไลข้อมือสำหรับคนชอบ Size ใหญ่",
    },
    {
      image: สายมุก,
      name: "กระเป๋าสาน กระเป๋าผักตบชวา กระเป๋าสายมุก",
      price: "590.-",
      details: "กระเป๋าสานจากผักตบชวา งานประณีต ละเอียด คุณภาพส่งออก คัดสรรมาเพื่อคุณ งานเกรดพรีเมียม",
    },
    {
      image: สายเปีย,
      name: "กระเป๋าสาน กระเป๋าผักตบชวา กระเป๋าสายเปีย",
      price: "1,290.-",
      details: "Wide 3 inches Length 6.5 inches Height 6 inches",
    },
  ];

  return (
    <MainLayout>
      <div style={{ marginTop: 20 }}>
        {product.map((c) => (
          <ProductCard
            name={c.name}
            price={c.price}
            details={c.details}
            image={c.image}
          />
        ))}
      </div>
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      <div style={divStyle}>
      <img src={props.image} alt={props.name} style={{ display: 'block', margin: '0 auto', maxWidth: '50%', height: 'auto', marginBottom: 20 }} />
        <p style={textStyle}>{props.name}</p>
        <p style={textStyle}>Price: {props.price}</p>
        <p style={textStyle}>Details: {props.details}</p>
      </div>
    </>
  );
};

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginLeft: "20%",
  marginRight: "20%",
  marginBottom: 15,
  fontWeight: "bold",
  fontFamily: "courier",
};

const textStyle = {
  marginBottom: 10,
};


export default Product;

