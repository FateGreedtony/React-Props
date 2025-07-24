function Welcome({ username, age}) {
  return <p>Aku adalah {username}, umurku {age} tahun!</p>;
}

function App() {
  return (
    <div>
      <Welcome 
        username="Tirta" 
        age="17"
      />
      <Welcome 
        username="Adit"
        age="18"
      />
    </div>
  );
}

export default App;


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


// contoh props dengan berbagai tipe
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