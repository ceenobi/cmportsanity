import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import Worklayout from "./subcomponents/featuredProject";
import ProjectHiglights from "./subcomponents/projectHiglights";
import AnimateBox from "./subcomponents/animateBox";
import SectionLayout from "./subcomponents/sectionLayout";
import { WorkType } from "@/types";
import { log } from "console";

interface IProps {
  workdata: WorkType[];
}

export default function Work({ workdata }: IProps) {
  const featuredWorks: WorkType[] = workdata.filter(
    (work) => work.featured === true
  );
  const highlightWorks: WorkType[] = workdata.filter(
    (work) => work.featured === false
  );

  console.log(featuredWorks);

  return (
    <AnimateBox>
      <SectionLayout id="work" number="03" title="Featured Projects">
        <Box mt={8}>
          {featuredWorks.slice(0, 1).map((item) => (
            <Worklayout
              direction={"row"}
              textAlign={{ base: "start", lg: "right" }}
              textAlignDesc={{ base: "start", lg: "right" }}
              left="0"
              rightDesc={{ base: "null", lg: "0" }}
              jContent={{ base: "start", lg: "end" }}
              key={item._id}
              src={item?.cloudinaryList[0]?.secure_url}
              alt="img"
              title={item.title}
              desc={item.desc}
              tag={item.tag.join(" ")}
              github={item.github}
              site={item.site}
              imgLink={item.site}
            />
          ))}
          {featuredWorks.slice(1, 2).map((item) => (
            <Worklayout
              direction={"row-reverse"}
              textAlign={{ base: "start", lg: "left" }}
              textAlignDesc={"start"}
              leftDesc={{ base: "null", lg: "0" }}
              right="0"
              jContent={"start"}
              key={item._id}
              src={item?.cloudinaryList[0]?.secure_url}
              alt="img"
              title={item.title}
              desc={item.desc}
              tag={item.tag.join(" ")}
              github={item.github}
              site={item.site}
              imgLink={item.site}
            />
          ))}
          {featuredWorks.slice(2, 3).map((item) => (
            <Worklayout
              direction={"row"}
              textAlign={{ base: "start", lg: "right" }}
              textAlignDesc={{ base: "start", lg: "right" }}
              left="0"
              rightDesc={{ base: "null", lg: "0" }}
              jContent={{ base: "start", lg: "end" }}
              key={item._id}
              src={item?.cloudinaryList[0]?.secure_url}
              alt="img"
              title={item.title}
              desc={item.desc}
              tag={item.tag.join(" ")}
              github={item.github}
              site={item.site}
              imgLink={item.site}
            />
          ))}
          {featuredWorks.slice(3).map((item) => (
            <Worklayout
              direction={"row"}
              textAlign={{ base: "start", lg: "right" }}
              textAlignDesc={{ base: "start", lg: "right" }}
              left="0"
              rightDesc={{ base: "null", lg: "0" }}
              jContent={{ base: "start", lg: "end" }}
              key={item._id}
              src={item?.cloudinaryList[0]?.secure_url}
              alt="img"
              title={item.title}
              desc={item.desc}
              tag={item.tag.join(" ")}
              github={item.github}
              site={item.site}
              imgLink={item.site}
            />
          ))}
        </Box>
        <Box mt={{ base: "6rem", lg: "12rem" }}>
          <ProjectHiglights highlightWorks={highlightWorks} />
          <Flex justify="center">
            <Button
              borderColor="brand.600"
              color="brand.600"
              variant="outline"
              borderRadius="0"
              mt={12}
              as={Link}
              href="https://www.github.com/ceenobi"
            >
              View Archive
            </Button>
          </Flex>
        </Box>
      </SectionLayout>
    </AnimateBox>
  );
}
