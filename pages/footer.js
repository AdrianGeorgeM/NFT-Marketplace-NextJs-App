import 'sf-font';
import { Text, Row, Spacer, Container, Col } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	const footer1 = [
		{
			id: 1,
			img: 'discord.png',
			url: 'https://discord.com/',
		},
		{
			id: 2,
			img: 'youtube.png',
			url: 'https://www.youtube.com/',
		},
		{
			id: 3,
			img: 'twitter.png',
			url: 'https://twitter.com/',
		},
	];

	const footer2 = [
		{
			id: 1,
			img: 'polygonwhite.png',
		},
	];

	return (
		<div>
			<Spacer></Spacer>
			<Container lg='true'>
				<Spacer></Spacer>
				<Row gap={3}>
					<Col>
						<Link href='/'>
							<Text
								h2
								style={{
									color: '#fff',
									fontSmooth: 'always',
									textShadow: '-0px 0px 3px #ffffff',
									fontFamily: 'SF Pro Display',
									fontWeight: '700',
								}}
							>
								Market
							</Text>
						</Link>
						<Text
							style={{
								color: '#fff',
								fontSmooth: 'always',
								fontFamily: 'SF Pro Display',
							}}
						>
							The blockchain agnostic marketplace. The token with endless posibilities.
							NFT&aposs are more than just art. Its meant to change the way humans
							establish ownership of an asset beyond paper.
						</Text>
					</Col>
				</Row>
				<Row gap={3}>
					<Col>
						<Text style={{ marginTop: '3px' }} h4>
							Follow Us!
						</Text>
						<ul>
							{footer1.map((item, idx) => {
								return (
									<a key={idx} href={item.url}>
										<Image
											src={item.img}
											style={{ marginRight: '1px' }}
											width='150px'
											height='50px'
											alt=''
										/>
									</a>
								);
							})}
						</ul>
					</Col>
					<Col>
						<Text h4>Integrations</Text>
						<ul>
							{footer2.map((item, idx) => {
								return (
									<Image
										key={idx}
										src={item.img}
										style={{ marginRight: '5px' }}
										width='200px'
										height='50px'
										alt=''
									/>
								);
							})}
						</ul>
					</Col>
					<Col style={{ marginLeft: '5px' }}>
						<Text h4>Powered by</Text>
						<Image
							src='alchemyblue.png'
							alt=''
							style={{
								width: '200px',
							}}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
