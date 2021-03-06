import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [masakans, setMasakans] = React.useState([
    {
      nama_masakan: "Rendang",
      Image:
        "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/ilustrasi-rendang.jpg",
      harga: "Rp 33.000",
      rating: "8.2/10",
    },
    {
      nama_masakan: "Ayam Bakar",
      Image:
        "https://asset.kompas.com/crops/yoovaRyPxaPFOY4gfCciore2eUY=/3x0:700x465/750x500/data/photo/2020/12/30/5fec5602f116e.jpg",
      harga: "Rp 13.000",
      rating: "7.3/10",
    },
    {
      nama_masakan: "Pecel Lele",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Pecel_Lele_1.JPG",
      harga: "Rp 23.000",
      rating: "8/10",
    },
    {
      nama_masakan: "Nasi Goreng",
      Image:
        "https://cdn1-production-images-kly.akamaized.net/KxuztQKl3tnUN0Fw5iAwKsnX_u0=/0x148:1920x1230/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
      harga: "Rp 25.000",
      rating: "9/10",
    },
    {
      nama_masakan: "Ayam Goreng",
      Image:
        "https://www.resepistimewa.com/wp-content/uploads/ayam-goreng-kalasan-khas-yogya.jpg",
      harga: "Rp 17.000",
      rating: "5.9/10",
    },
    {
      nama_masakan: "Sayur Sop",
      Image:
        "https://konfirmasitimes.com/wp-content/uploads/2020/03/sayur-sop.jpg",
      harga: "Rp 26.000",
      rating: "6.8/10",
    },
    {
      nama_masakan: "Soto Mie Bogor",
      Image:
        "https://www.resepistimewa.com/wp-content/uploads/resep-soto-mie-bogor.jpg",
      harga: "Rp 22.500",
      rating: "7.8/10",
    },
    {
      nama_masakan: "Kwetiau Goreng",
      Image:
        "http://kbu-cdn.com/dk/wp-content/uploads/kwetiau-goreng-pedas.jpg",
      harga: "Rp 15.000",
      rating: "4.6/10",
    },
    {
      nama_masakan: "Mie Goreng Special",
      Image: "http://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-sosis.jpg",
      harga: "Rp 18.500",
      rating: "7/10",
    },
    {
      nama_masakan: "Gudeg",
      Image: "https://kulinerkota.com/wp-content/uploads/2021/03/gudeg.jpg",
      harga: "Rp 18.500",
      rating: "5.7/10",
    },
    {
      nama_masakan: "Bakso",
      Image:
        "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-bakso-sapi.jpg",
      harga: "Rp 17.500",
      rating: "9/10",
    },
    {
      nama_masakan: "Sayur Asem",
      Image:
        "https://asset.kompas.com/crops/Hppc8IGLh2gbocbltsgqJ4cU1mo=/3x0:700x465/780x390/data/photo/2020/07/24/5f1a439848df6.jpg",
      harga: "Rp 12.500",
      rating: "6.5/10",
    },
  ]);

  return (
    <React.Fragment>
      <div className="h-full bg-gray-500">
        <div className="  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute "
            viewBox="0 0 1440 320"
          >
            <path
              fill="#1f2937"
              fill-opacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,245.3C672,235,768,181,864,138.7C960,96,1056,64,1152,69.3C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="lg:mx-32 lg:mb-32">
            <div className="relative ml-10">
              <Header></Header>
            </div>
          </div>
         

          <div className="lg:mx-32">
            <div className="lg:col-span-5 lg:grid grid-cols-4 gap-5   lg:px-0 overflow-auto px-8 py-5">
              {masakans.map((masakan, index) => (
                <Main
                  nama_masakan={masakan.nama_masakan}
                  Image={masakan.Image}
                  harga={masakan.harga}
                  rating={masakan.rating}
                ></Main>
              ))}
            </div>
          </div>
          
          
            
            <div className="">
              <Footer></Footer>
            </div>
            
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
