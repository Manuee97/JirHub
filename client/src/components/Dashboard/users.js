import React, { Component } from "react";
import { Grid, Header, Table } from "semantic-ui-react";
import AuthService from "../../services/AuthService";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.authService = new AuthService();
  }

  componentDidMount=()=>{

    this.authService.allUsers().then((users) => {
      console.log(users)
      this.setState({...this.setState, users: users.user})
    })

  }

  render() {
    const { loggedInUser } = this.props;

    return (
      <div>
        <Grid style={{ marginLeft: "7em", marginTop: "1em" }}>
          <Grid.Row>
            <Header as="h1">Users</Header>
          </Grid.Row>
          <Grid.Row>
            <Table style={{ width: "70%" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nombre</Table.HeaderCell>
                  <Table.HeaderCell>Apellidos</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.users.map(user => {
                  return (
                    <Table.Row>
                      <Table.Cell>{user.username}</Table.Cell>
                      <Table.Cell>{user.lastname}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.id}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Users;
