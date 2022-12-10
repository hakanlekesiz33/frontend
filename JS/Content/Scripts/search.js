
var categories = ["nft", "bitcoin", "etherium", "bnb"];


var mockData = [
    {
        title: "Moonbirds nft",
        category: "nft",
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link:"/urun-detay/1"

    },
    {
        title: "Bitcoin sdfsds ds ",
        category: "bitcoin",
        desc: "Bitcoin Faucibus o Bitcoin dio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link:"/urun-detay/2"
    },
    {
        title: "Moonbirds etherium ",
        category: "etherium",
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link:"/urun-detay/3"
    },
    {
        title: "etherium sdfsds ds ",
        category: "etherium",
        desc: "Bitcoin Faucibus o Bitcoin dio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link:"/urun-detay/4"
    },

]


var Search = {
    Elements: {
        searchInput: document.getElementById("input-search"),
        results: document.getElementById("search-results"),
        template: document.getElementById("card-template"),
    },
    Action: {
        handleSearch: function () {
            var el = Search.Elements;

            var filteredData = mockData;

            if (el.searchInput.value.length > 0) {
                var val = el.searchInput.value.toLocaleLowerCase();

                function _filter(data) {
                    return data.title.toLocaleLowerCase().includes(val) || data.desc.toLocaleLowerCase().includes(val)
                }

                filteredData = mockData.filter(_filter);

            }


            debugger
            el.results.innerHTML = "";

            if (filteredData.length > 0) {
                for (let i = 0; i < filteredData.length; i++) {
                    const element = filteredData[i];
                    var div = document.createElement("div");
                    div.innerHTML = el.template.innerHTML;
                    debugger
                    div.querySelector("h5").innerText=element.title;
                    div.querySelector("p").innerText=element.desc;
                    //div.querySelector("img").src= element.img;
                    div.querySelector("img").setAttribute("src", element.img);
                    div.querySelector("a").setAttribute("href", element.link);
                    el.results.appendChild(div.querySelector("a"));
                }
            }
            else {
                el.results.innerText = "Sonuç Bulunamadı";
            }


        },
        handleCtg:function () {
            
        }

    }
}
