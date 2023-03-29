import React from "react";
import { Tweet } from "react-twitter-widgets";
import { CardContainer } from "../styles";

function NewsCard({ id }) {
	return (
		<CardContainer>
			<Tweet tweetId={id} options={{ theme: "dark", width: "100%" }}></Tweet>
		</CardContainer>
	);
}

export default NewsCard;
