import Head from 'next/head';

const About = () => {
	return (
		<>
			<Head>
				<title>About | bimaindra.com</title>
			</Head>
			<section className="u-safe-area">
				<div className="container">
					<div className="prose mx-auto dark:prose-invert md:w-3/4 md:prose-base lg:w-1/2">
						<h1>Hi! My name is Bima.</h1>
						<p>
							A Web Front End Engineer based in Surabaya, Indonesia with a passion for building user-friendly and
							visually appealing websites.
						</p>
						<p>
							My experience in the field dates back to 2016, and I have a strong foundation in HTML, CSS, and
							JavaScript. I am highly motivated to continue learning and staying up to date with the latest developments
							in web technology.
						</p>
						<p>
							Recently, I have been focusing on expanding my knowledge of the ReactJS ecosystem, which is a popular
							choice for building user interfaces for web applications.
						</p>
						<p>
							In my current role, I am responsible for designing and implementing the front-end of websites, ensuring
							that they function smoothly and look great on a variety of devices. I am committed to producing
							high-quality work and am always looking for new challenges to help me grow as a professional.
						</p>
						<p>
							<small>
								<em>
									*description generated by{' '}
									<a href="https://chat.openai.com/chat" target="_blank">
										ChatGPT
									</a>
									. &nbsp;
								</em>
								😄 🙏🏻
							</small>
						</p>
					</div>
				</div>
			</section>
			{/*<section className="u-safe-area border-t">
				<div className="container"></div>
			</section>*/}
		</>
	);
};

export default About;