import React, {useEffect, useState} from 'react'
import {Box, Heading, Text} from "@chakra-ui/react";
import axios from "axios";


const News = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetchDataFromRssFeed()
    })


    const fetchDataFromRssFeed = async () => {
        //   const testURL = 'https://archive.nytimes.com/www.nytimes.com/services/xml/rss/index.html?mcubz=0';
        //   // const googleUrl = "https://news.google.com/rss/search?q=whale&hl=en-GB&gl=GB&ceid=GB:en"
        //
        //   const myInit = {
        //       method: 'GET',
        //       mode: 'no-cors',
        //   };
        //
        //   const myRequest = new Request(testURL, myInit);
        //
        //   fetch(myRequest).then(function (response) {
        //       return response;
        //   })
        //       .then(response => response.text())
        //       .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        //       .then(data => {
        //           console.log(data)
        //           const items = data.querySelectorAll("item");
        //           let html = ``;
        //           items.forEach(el => {
        //               html += `
        //   <article>
        //     <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
        //     <h2>
        //       <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
        //         ${el.querySelector("title").innerHTML}
        //       </a>
        //     </h2>
        //   </article>
        // `;
        //               setPosts(html)
        //           });
        //       })
        //       .catch(function (e) {
        //           console.log("failure!")
        //           console.log(e);
        //       });

        const apiKey = process.env.REACT_APP_NEWSDATA_API_KEY
        const newsUrl = `https://newsdata.io/api/1/archive?apikey=${apiKey}`

        const headers = {"Access-Control-Allow-Origin": "*", "X-ACCESS-KEY": apiKey}
        axios.get(newsUrl, {headers, withCredentials: true})
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log('err', error);
            })
            .then(function () {
                // always executed
                setPosts("done!")
            });

        // var request = new XMLHttpRequest();
        // request.onreadystatechange = () => {
        //     if (request.readyState == 4 && request.status == 200) {
        //         var myObj = JSON.parse(request.responseText);
        //         for (var i = 0; i < 1; i++) {
        //             setPosts({
        //                 recentBlogPost: {
        //                     name: myObj.items[i].title,
        //                     url: myObj.items[i].link
        //                 }
        //             });
        //         }
        //     }
        // }
        // request.open("GET", url, true);
        // request.send();

        console.log('fetched')
    }

    return <Box mt={12}><Heading
        size="lg">News</Heading><Text>{JSON.stringify(posts)} Hi
    </Text></Box>
}

export default News