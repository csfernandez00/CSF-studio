import React from "react";
import { SectionTitle } from "../Common/Components/styles";
import NewsCard from "./components/NewsCard";
import { NewsCont, NewsGrid } from "./styles";

const lastTweets = [
	{
		id: "1640926655861477376",
	},
	{
		id: "1640726364884967448",
	},
	{
		id: "1640714251785605122",
	},
];

function News() {
	return (
		<NewsCont id="news">
			<SectionTitle>News</SectionTitle>
			<NewsGrid>
				{lastTweets.map((tweet) => {
					return <NewsCard id={tweet.id} />;
				})}
			</NewsGrid>
		</NewsCont>
	);
}

export default News;
