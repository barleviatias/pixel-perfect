// import { Link } from 'react-router-dom';
// import heroTxt from '../assets/img/hero.png';
import Iconchart from '../img/icon-chart.svg';
import Quote from '../img/icon-quotes.svg';
import AvatarKady from '../img/avatar-kady.jpg';
import AvatarAiysha from '../img/avatar-aiysha.jpg';
import AvatarArthur from '../img/avatar-arthur.jpg';
export function Home() {
	return (
		<main className="home main">
			<section className="hero-section ">
				<div className="hero-container ">
					<div className="hero-h1 flex">
						<h1>
							Find the <br /> best<span> talent </span>
						</h1>
					</div>
					<div className="hero-p flex">
						<p>
							Finding the right people and building high performing teams can be
							hard. Most companies aren’t tapping into the abundance of global
							talent. We’re about to change that.
						</p>
					</div>
				</div>
			</section>
			<section className="first-section  flex ">
				<div className="section-container ">
					<div className="section-h1 flex">
						<h1>
							Build & manage <br /> distributed teams
							<br /> like no one else.
						</h1>
					</div>
					<div className="section-table flex">
						<div className="section-row flex">
							<img src={Iconchart} alt="" />
							<div className="content">
								<h3>Experienced Individuals</h3>
								<p>
									Our network is made up of highly experienced professionals who
									are passionate about what they do.
								</p>
							</div>
						</div>
						<div className="section-row flex">
							<img src={Iconchart} alt="" />
							<div className="content">
								<h3>Experienced Individuals</h3>
								<p>
									Our network is made up of highly experienced professionals who
									are passionate about what they do.
								</p>
							</div>
						</div>
						<div className="section-row flex">
							<img src={Iconchart} alt="" />
							<div className="content">
								<h3>Experienced Individuals</h3>
								<p>
									Our network is made up of highly experienced professionals who
									are passionate about what they do.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="second-section   flex ">
				<h1>
					Delivering real results for top <br /> companies. Some of our{' '}
					<span>success stories.</span>
				</h1>
				<div className="content flex">
					<div className="row">
						<img className="quote" src={Quote} alt="" />
						<p>
							{' '}
							“The team perfectly fit the specialized skill set required. They
							focused on the most essential features helping us launch the
							platform eight months faster than planned.”
						</p>
						<h2>Kady Baker</h2>
						<h5>Product Manager at Bookmark</h5>
						<img className="avatar" src={AvatarKady} alt="" />
					</div>
					<div className="row">
						<img className="quote" src={Quote} alt="" />
						<p>
							{' '}
							“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
						</p>
						<h2>Aiysha Reese</h2>
						<h5>Founder of Manage</h5>
						<img className="avatar" src={AvatarAiysha} alt="" />
					</div>
					<div className="row">
						<img className="quote" src={Quote} alt="" />
						<p>
							{' '}
                            “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
						</p>
						<h2>Arthur Clarke</h2>
						<h5>Co-founder of MyPhysio</h5>
						<img className="avatar" src={AvatarArthur} alt="" />
					</div>
				</div>
			</section>
			<div className="background2"></div>
		</main>
	);
}
