import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Swarm from '../../../components/Swarm';
import MainLayout from '../../layouts/main';

const IndexPage = ({ dispatch, onButtonClick, swarmNodes, containers, modal }) => (
    <MainLayout>
        <Swarm nodes={swarmNodes} containers={containers} />
    </MainLayout>
);

// State to props binding
const mapStateToProps = state => ({
    swarmNodes: state.swarmNodes,
    containers: state.swarmTasks,
    modal: state.modal
});

export default connect(
    mapStateToProps
)(IndexPage);
