<template>
    <div class="filter-container">
      <h2>Filter Players</h2>
  
      <!-- Dropdown to select the filter type -->
      <select v-model="selectedFilter" class="filter-select">
        <option value="">Select Filter Type</option>
        <option value="name">Name</option>
        <option value="team_name">Team Name</option>
        <option value="matches">Matches</option>
        <option value="runs">Runs</option>
        <option value="role">Role</option>
      </select>
  
      <!-- Input field for filter criteria -->
      <input
        v-model="filterValue"
        type="text"
        :placeholder="placeholderText"
        class="filter-input"
      />
  
      <!-- Button to reset filters -->
      <button @click="resetFilters" class="reset-button">Reset Filters</button>
  
      <!-- Display the filtered player count -->
      <p class="player-count">Filtered Players: {{ filteredPlayers.length }}</p>
  
      <!-- Display the filtered players -->
      <div class="card-container">
        <div class="card" v-for="player in filteredPlayers" :key="player.name">
          <img :src="player.image || 'https://via.placeholder.com/150'" alt="Player Image" class="player-image" />
          <h3 class="player-name">{{ player.name }}</h3>
          <p><strong>Team:</strong> {{ player.team_name }}</p>
          <p><strong>Matches:</strong> {{ player.matches }}</p>
          <p><strong>Runs:</strong> {{ player.runs }}</p>
          <p><strong>Role:</strong> {{ getRole(player.role) }}</p>
        </div>
      </div>
    </div>
  </template>
  Updated Script
  javascript
  Copy code
  <script>
  import playersData from '@/assets/players.json'; // Adjust path if needed
  
  export default {
    name: "PlayerFilter",
    data() {
      return {
        players: playersData.originalPlayers,
        selectedFilter: "",
        filterValue: "",
      };
    },
    computed: {
      placeholderText() {
        switch (this.selectedFilter) {
          case 'name':
            return 'Filter by name';
          case 'team_name':
            return 'Filter by team name';
          case 'matches':
            return 'Filter by matches';
          case 'runs':
            return 'Filter by runs';
          case 'role':
            return 'Select Role';
          default:
            return 'Enter filter value';
        }
      },
      filteredPlayers() {
        return this.players.filter(player => {
          switch (this.selectedFilter) {
            case 'name':
              return player.name.toLowerCase().includes(this.filterValue.toLowerCase());
            case 'team_name':
              return player.team_name.toLowerCase().includes(this.filterValue.toLowerCase());
            case 'matches':
              return player.matches >= (this.filterValue || 0);
            case 'runs':
              return player.runs >= (this.filterValue || 0);
            case 'role':
              return player.role == this.filterValue;
            default:
              return true;
          }
        });
      },
    },
    methods: {
      resetFilters() {
        this.selectedFilter = "";
        this.filterValue = "";
      },
      getRole(role) {
        switch (role) {
          case 2:
            return "Batsman";
          case 3:
            return "All-Rounder";
          case 4:
            return "Bowler";
          default:
            return "Unknown";
        }
      },
    },
  };
  </script>
  <style scoped>
 /* General Styles */
.filter-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  color: #333;
}

.filter-input,
.filter-select {
  display: block;
  width: calc(100% - 22px);
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.filter-input:focus,
.filter-select:focus {
  border-color: #007bff;
  outline: none;
}

.reset-button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #ff4d4d;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #e60000;
}

.player-count {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.player-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
}

.player-name {
  font-size: 18px;
  color: #333;
  margin: 10px 0;
}
  </style>