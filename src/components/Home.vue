<template>
  <div class="main-container">
    <h1 class="welcome-title">Welcome to the Player App</h1>
    <p class="intro-text">Select "Filter Players" to navigate to the filter page.</p>
    <h1 class="categories-title">Player Categories</h1>

    <h2 class="category-title batsmen-title">Batsmen</h2>
    <div class="card-container">
      <div class="card batsman-card" v-for="player in batsmen" :key="player.name">
        <img :src="player.image" alt="Player Image" v-if="player.image" class="player-image" />
        <h3 class="player-name">{{ player.name }}</h3>
        <p><strong>Team:</strong> {{ player.team_name }}</p>
        <p><strong>Matches:</strong> {{ player.matches }}</p>
        <p><strong>Runs:</strong> {{ player.runs }}</p>
      </div>
    </div>

    <h2 class="category-title all-rounder-title">All-Rounders</h2>
    <div class="card-container">
      <div class="card all-rounder-card" v-for="player in allRounders" :key="player.name">
        <img :src="player.image" alt="Player Image" v-if="player.image" class="player-image" />
        <h3 class="player-name">{{ player.name }}</h3>
        <p><strong>Team:</strong> {{ player.team_name }}</p>
        <p><strong>Matches:</strong> {{ player.matches }}</p>
        <p><strong>Runs:</strong> {{ player.runs }}</p>
        <p><strong>Best Bowling:</strong> {{ player.best_bowling_figures }}</p>
      </div>
    </div>

    <h2 class="category-title bowler-title">Bowlers</h2>
    <div class="card-container">
      <div class="card bowler-card" v-for="player in bowlers" :key="player.name">
        <img :src="player.image" alt="Player Image" v-if="player.image" class="player-image" />
        <h3 class="player-name">{{ player.name }}</h3>
        <p><strong>Team:</strong> {{ player.team_name }}</p>
        <p><strong>Matches:</strong> {{ player.matches }}</p>
        <p><strong>Best Bowling:</strong> {{ player.best_bowling_figures }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import playersData from '@/assets/players.json'; // Import the players JSON

export default {
  name: "HomePage",
  data() {
    return {
      players: playersData.originalPlayers // Assign imported players data
    };
  },
  computed: {
    batsmen() {
      return this.players.filter(player => player.role === 2); // Filter players with role 2 (Batsmen)
    },
    allRounders() {
      return this.players.filter(player => player.role === 3); // Filter players with role 3 (All-Rounders)
    },
    bowlers() {
      return this.players.filter(player => player.role === 4); // Filter players with role 4 (Bowlers)
    }
  }
};
</script>

<style scoped>
.main-container {
  padding: 20px;
  background-color: #f4f4f9;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-title {
  text-align: center;
  color: #333;
  font-size: 2.5em;
}

.intro-text {
  text-align: center;
  color: #666;
  font-size: 1.2em;
}

.categories-title {
  text-align: center;
  color: #444;
  font-size: 2em;
  margin-top: 20px;
}

/* Category Title Styles */
.category-title {
  margin: 20px 0;
  font-size: 1.8em;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(135deg, #ff6b6b, #ffbe7b);
}

/* Specific Category Colors */
.batsmen-title {
  background: linear-gradient(135deg, #ff6b6b, #ffbe7b);
}

.all-rounder-title {
  background: linear-gradient(135deg, #4ecdc4, #556270);
}

.bowler-title {
  background: linear-gradient(135deg, #6a1b9a, #ab47bc);
}

/* Card Container Styles */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 220px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border: 1px solid #ddd;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.player-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
}

.player-name {
  color: #333;
  font-size: 1.5em;
  margin: 10px 0;
}

.card p {
  color: #555;
  font-size: 1em;
  margin: 5px 0;
}
</style>