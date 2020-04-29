import React, { Component } from 'react';
import { IconButton, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProjectEntry from './ProjectEntry/ProjectEntry';
import styles from './Projects.css';

export default class Projects extends Component {
  render() {
    const pinnedProjects = this.props.projects
      .filter(x => x.favorite)
      .map((item, index) => <ProjectEntry key={item.id} project={item} />);
    const projects = this.props.projects
      .filter(x => !x.favorite)
      .map((item, index) => <ProjectEntry key={item.id} project={item} />);

    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.titleContainer}>
          <div className={styles.title}>Projects</div>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
        </div>
        {pinnedProjects}
        <Divider class={styles.projectDivider} />
        {projects}
      </div>
    );
  }
}
