let printTheConsole = (item) => {
    for(let i = 0; i < item.length; i++){
        console.log(item[i]);
    }
};

let carBrands = ["Toyota", "banana"];
let euroCarBrand = ["GMC", "Mercedes-Benz"];
let connectedCarBrandsWorldWide = carBrands.concat(euroCarBrand);


//let slicedCarBrands = connectedCarBrandsWorldWide.slice(2, connectedCarBrandsWorldWide.length);
//carBrands.push("Nissan");
//let removedCarBrands = carBrands.pop();
//carBrands.unshift("GMC");
//carBrands.splice(0, 0, "test");


printTheConsole(connectedCarBrandsWorldWide);
//console.log(slicedCarBrands.indexOf('GMC'));