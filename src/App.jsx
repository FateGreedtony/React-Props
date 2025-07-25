function Profile({ name, age, hobby, photo }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      maxWidth: "300px",
      backgroundColor: "#f9f9f9"
    }}>
      <img 
        src={photo} 
        alt={`Foto ${name}`} 
        style={{ width: "100%", borderRadius: "8px" }} 
      />
      <h2>{name}</h2>
      <p>Umur: {age} tahun</p>
      <p>Hobi: {hobby}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Daftar Profil</h1>

      <Profile 
        name="Tirta"
        age={17}
        hobby="Berkuda"
        photo="https://i.pinimg.com/736x/1e/c1/b8/1ec1b8dd92f5f545b424d666e6683b66.jpg"
      />

      <Profile 
        name="Adit"
        age={18}
        hobby="Ngoding"
        photo="https://i.pinimg.com/736x/01/e0/9d/01e09d7aa7839e53ad2a16c3949443ca.jpg"
      />
    </div>
  );
}

export default App;




// ===== destructuring in body =====
// function Welcome(props) {
//   const { username, age, hobby } = props;
//   return <p>Aku adalah {username}, umurku {age} tahun, dan hobbyku adalah {hobby}</p>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome 
//         username="Tirta" 
//         age="17"
//         hobby="berkuda"
//       />
//       <Welcome 
//         username="Adit"
//         age="18"
//         hobby="membantu sesama"
//       />
//     </div>
//   );
// }


// ===== destructuring in parameter =====
// function Welcome(username, age) {
//   return <p>Aku adalah {username}, umurku {age} tahun!</p>;
// }

// komponen dasar untuk contoh modul halaman 4
// export default App;

// function Welcome(props) {
//   return <p>Selamat datang, {props.username}!</p>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome username="Tirta" />
//       <Welcome username="Adit" />
//     </div>
//   );
// }


// ===== contoh props dengan berbagai tipe =====
// function Header() {
//   return <h1>Aku adalah Header dari props!</h1>;
// }

// function InfoBox(props) {
//   return (
//     <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
//       <p><strong>Nama (String):</strong> {props.username}</p>
//       <p><strong>Usia (Number):</strong> {props.age} tahun</p>
//       <p><strong>Status Aktif (Boolean):</strong> {props.isActive ? "Aktif" : "Nonaktif"}</p>
//       <p><strong>Daftar Barang (Array):</strong> {props.items.join(", ")}</p>
//       <p><strong>Data User (Object):</strong> {props.user.name} ({props.user.age} tahun)</p>
//       <p><strong>Header (JSX):</strong></p>
//       {props.component}
//       <button onClick={props.click}>Klik Aku! (Function)</button>
//     </div>
//   );
// }

// function App() {
//   const handleClick = () => {
//     alert("Tombol dari props telah ditekan!");
//   };

//   return (
//     <div>
//       <h1>Contoh Pengiriman Props Berbagai Tipe Data</h1>
//       <InfoBox
//         username="Tirta"                          // String
//         age={17}                                  // Number
//         isActive={true}                           // Boolean
//         items={["Tas", "Buku", "Laptop"]}         // Array
//         user={{ name: "Reyhan Tirta", age: 17 }}  // Object
//         header={<Header />}                       // JSX / Komponen
//         click={handleClick}                     // Function
//       />
//     </div>
//   );
// }