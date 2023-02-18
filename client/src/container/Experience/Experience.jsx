import "./experience.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--aducation"
          date="1982 - 1986"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Херсонський Машинобудівний технікум.
          </h3>
          <p> Налогодження верстатів з ЧПУ</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--aducation"
          date="1987 - 1990"
          iconStyle={{ background: "rgba(22, 137, 214)", color: "#fff" }}
          icon={<DirectionsRunIcon />}
        >
          <h3 className="vertical-timeline-element-title">Збройні сили.</h3>
          <p>матрос</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--aducation"
          date="1990 - лютий 2022"
          iconStyle={{ background: "rgb(204, 207, 25)", color: "#fff" }}
          icon={<BusinessCenterIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Мале приватне підприємство "НЄМО".
          </h3>
          <p> Комерційний директор</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--aducation"
          date="лютий 2022 - по цей час"
          iconStyle={{ background: " rgb(199, 126, 16)", color: "#fff" }}
          icon={<DeveloperBoardIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Самостійно навчаюсь Full Stack Developer.
          </h3>
          <p>
            Використовую в більшості
            <span className="spanYouTubeIcon">
              <YouTubeIcon color="error" />
            </span>
            Youtube
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
