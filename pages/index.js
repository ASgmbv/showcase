import { Box } from "@chakra-ui/react";
import Features from "../components/features";
import Footer from "../components/footer";
import Form from "../components/form";
import BannerSlider from "../components/slider";
import { Testimonials } from "../components/testimonials";
import Works from "../components/works";
import Header from "../components/header";
import { queryProjects, queryServices, queryTestimonials } from "lib/queries";
import { NextSeo } from "next-seo";
import { getPageTitle } from "lib/config";
import Script from "next/script";

export const getStaticProps = async () => {
	const services = await queryServices({
		pageSize: 4,
	});

	const projects = await queryProjects({
		pageSize: 4,
	});

	const testimonials = await queryTestimonials();

	return {
		props: {
			projects,
			services,
			testimonials,
		},
		revalidate: 1,
	};
};

export default function Home({ services, projects, testimonials }) {
	return (
		<>
			<NextSeo
				title={getPageTitle("Home")}
				description="Luxury outdoor living space. Call now to get a free estimate."
			/>

			<Script
				dangerouslySetInnerHTML={{
					__html: `
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="fe1ffce6-c134-4091-b084-e8c0dac2512b";
          (function(){d=document;
            s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
          `,
				}}
			/>

			<BannerSlider />
			<Box position="relative">
				<Header />
				<Features services={services} />
				<Works projects={projects} />
				<Testimonials testimonials={testimonials} />
				<Form />
				<Footer />
			</Box>
		</>
	);
}
