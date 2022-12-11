
var categories = ["nft", "bitcoin", "etherium", "bnb"];


var mockData = [
    {
        title: "Moonbirds nft",
        category: "nft",
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link: "/urun-detay/1"

    },
    {
        title: "Bitcoin sdfsds ds ",
        category: "bitcoin",
        desc: "Bitcoin Faucibus o Bitcoin dio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link: "/urun-detay/2"
    },
    {
        title: "Moonbirds etherium ",
        category: "etherium",
        desc: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link: "/urun-detay/3"
    },
    {
        title: "etherium sdfsds ds ",
        category: "etherium",
        desc: "Bitcoin Faucibus o Bitcoin dio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
        img: "Content/images/home/card.jpg",
        link: "/urun-detay/4"
    },

]

var Search = {
    filter: {
        searchParam: "",
        category:""
    },
    Elements: {
        searchInput: document.getElementById("input-search"),
        selectCategory: document.getElementById("select-ctg"),
        results: document.getElementById("search-results"),
        template: document.getElementById("card-template"),
    },
    Action: {
        handleSearch: function () {
            debugger
            var el = Search.Elements;
            Search.filter.searchParam = el.searchInput.value;
            Search.Action.handleFilter();

        },
        handleCtg: function () {
            debugger
            var el = Search.Elements;
            Search.filter.category = el.selectCategory.value;
            Search.Action.handleFilter();
        },
        handleFilter: function () {
            debugger

            var el = Search.Elements;
            var filter = Search.filter;

            var filteredData = mockData;

            if (filter.searchParam.length > 0) {
                var val = filter.searchParam.toLocaleLowerCase();

                function _filter(data) {
                    return data.title.toLocaleLowerCase().includes(val) || data.desc.toLocaleLowerCase().includes(val)
                }

                filteredData = filteredData.filter(_filter);

            }

            if (filter.category.length > 0) {
                filteredData = filteredData.filter(x=>x.category === filter.category);
            }
 
            el.results.innerHTML = "";

            if (filteredData.length > 0) {
                for (let i = 0; i < filteredData.length; i++) {
                    const element = filteredData[i];
                    var div = document.createElement("div");
                    div.innerHTML = el.template.innerHTML;
                    debugger
                    div.querySelector("h5").innerText = element.title;
                    div.querySelector("p").innerText = element.desc;
                    //div.querySelector("img").src= element.img;
                    div.querySelector("img").setAttribute("src", element.img);
                    div.querySelector("a").setAttribute("href", element.link);
                    el.results.appendChild(div.querySelector("a"));
                }
            }
            else {
                el.results.innerText = "Sonuç Bulunamadı";
            }
        }

    }
}
