import categories from "../data/categories.json";
import cities from "../data/cities.json";

//Untuk mengubah number menjadi formatted string
//Contoh:
//formatRupiah(20000)
//Output: "Rp 20.000"
export const formatRupiah = (angka) =>
	"Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//Untuk mengubah string menjadi title case
export const toTitleCase = (str) =>
	str.replace(
		/\w\S*/g,
		(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	);

//Mendapatkan nama kategori dari id
export const getCategoryById = (id) =>
	categories.find((x) => x.id === +id)?.category || "";

//Mendapatkan nama kategori dari id
export const getCityById = (id) =>
	cities.find((x) => +x.id === +id)?.name || "";

//untuk mengubah image url menjadi File object
export const urlToObject = async (url) => {
	const response = await fetch(url);
	// here image is url/location of image
	const blob = await response.blob();
	const file = new File([blob], "image.jpg", { type: blob.type });
	//   console.log(file);
	return file;
};

