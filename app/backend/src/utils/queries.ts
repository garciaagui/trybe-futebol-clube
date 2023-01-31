const generalStandingsQuery = `SELECT 
t.team_name AS 'name',
CAST(SUM(CASE 
  WHEN t.id = m.home_team_id AND m.home_team_goals > m.away_team_goals THEN 3
  WHEN t.id = m.away_team_id AND m.home_team_goals < m.away_team_goals THEN 3
  WHEN m.home_team_goals = m.away_team_goals THEN 1
  ELSE 0 END) AS SIGNED) AS 'totalPoints',
COUNT(*) AS 'totalGames',
CAST(SUM(CASE 
  WHEN t.id = m.home_team_id AND m.home_team_goals > m.away_team_goals THEN 1
  WHEN t.id = m.away_team_id AND m.home_team_goals < m.away_team_goals THEN 1
  ELSE 0 END) AS SIGNED) AS 'totalVictories',
CAST(SUM(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) 
  AS SIGNED)AS 'totalDraws',
CAST(SUM(CASE 
  WHEN t.id = m.home_team_id AND m.home_team_goals < m.away_team_goals THEN 1
  WHEN t.id = m.away_team_id AND m.home_team_goals > m.away_team_goals THEN 1
  ELSE 0 END) AS SIGNED) AS 'totalLosses',
CAST(SUM(CASE 
  WHEN t.id = m.home_team_id THEN m.home_team_goals
  WHEN t.id = m.away_team_id THEN m.away_team_goals 
  ELSE 0 END) AS SIGNED) AS 'goalsFavor',
CAST(SUM(CASE 
  WHEN t.id = m.home_team_id THEN m.away_team_goals
  WHEN t.id = m.away_team_id THEN m.home_team_goals 
  ELSE 0 END) AS SIGNED) AS 'goalsOwn',
CAST((SUM(CASE 
  WHEN t.id = m.home_team_id THEN m.home_team_goals
  WHEN t.id = m.away_team_id THEN m.away_team_goals 
  ELSE 0 END) - SUM(CASE 
  WHEN t.id = m.home_team_id THEN m.away_team_goals
  WHEN t.id = m.away_team_id THEN m.home_team_goals 
  ELSE 0 END)) AS SIGNED) AS 'goalsBalance',
ROUND((SUM(CASE 
  WHEN t.id = m.home_team_id AND m.home_team_goals > m.away_team_goals THEN 3
  WHEN t.id = m.away_team_id AND m.home_team_goals < m.away_team_goals THEN 3
  WHEN m.home_team_goals = m.away_team_goals THEN 1
  ELSE 0 END) / (COUNT(*) * 3) * 100),2) AS 'efficiency'

FROM TRYBE_FUTEBOL_CLUBE.teams as t

INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as m

ON t.id = m.away_team_id OR t.id = m.home_team_id

WHERE m.in_progress = FALSE

GROUP BY t.team_name

ORDER BY 
  totalPoints DESC, 
  totalVictories DESC, 
  goalsBalance DESC, 
  goalsFavor DESC, 
  goalsOwn ASC;`;

const standingsByReferenceQueries = {
  home: `SELECT 
  t.team_name AS 'name',
  CAST(SUM(CASE 
    WHEN m.home_team_goals > m.away_team_goals THEN 3
    WHEN m.home_team_goals = m.away_team_goals THEN 1
    ELSE 0 END) AS SIGNED) AS 'totalPoints',
  COUNT(*) AS 'totalGames',
  CAST(SUM(CASE 
    WHEN m.home_team_goals > m.away_team_goals THEN 1
    ELSE 0 END) AS SIGNED) AS 'totalVictories',
  CAST(SUM(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) 
    AS SIGNED)AS 'totalDraws',
  CAST(SUM(CASE 
    WHEN m.home_team_goals < m.away_team_goals THEN 1
    ELSE 0 END) AS SIGNED) AS 'totalLosses',
  CAST(SUM(m.home_team_goals) AS SIGNED) AS 'goalsFavor',
  CAST(SUM(m.away_team_goals) AS SIGNED) AS 'goalsOwn',
  CAST((SUM(m.home_team_goals) - SUM(m.away_team_goals)) AS SIGNED) AS 'goalsBalance',
  ROUND((SUM(CASE 
    WHEN m.home_team_goals > m.away_team_goals THEN 3
    WHEN m.home_team_goals = m.away_team_goals THEN 1
    ELSE 0 END) / (COUNT(*) * 3) * 100),2) AS 'efficiency'
  FROM TRYBE_FUTEBOL_CLUBE.teams as t

  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as m

  ON t.id = m.home_team_id

  WHERE m.in_progress = FALSE

  GROUP BY t.team_name

  ORDER BY 
    totalPoints DESC, 
    totalVictories DESC, 
    goalsBalance DESC, 
    goalsFavor DESC, 
    goalsOwn ASC;`,

  away: `SELECT 
  t.team_name AS 'name',
  CAST(SUM(CASE 
    WHEN m.away_team_goals > m.home_team_goals THEN 3
    WHEN m.away_team_goals = m.home_team_goals THEN 1
    ELSE 0 END) AS SIGNED) AS 'totalPoints',
  COUNT(*) AS 'totalGames',
  CAST(SUM(CASE 
    WHEN m.away_team_goals > m.home_team_goals THEN 1
    ELSE 0 END) AS SIGNED) AS 'totalVictories',
  CAST(SUM(CASE WHEN m.away_team_goals = m.home_team_goals THEN 1 ELSE 0 END) 
    AS SIGNED)AS 'totalDraws',
  CAST(SUM(CASE 
    WHEN m.away_team_goals < m.home_team_goals THEN 1
    ELSE 0 END) AS SIGNED) AS 'totalLosses',
  CAST(SUM(m.away_team_goals) AS SIGNED) AS 'goalsFavor',
  CAST(SUM(m.home_team_goals) AS SIGNED) AS 'goalsOwn',
  CAST((SUM(m.away_team_goals) - SUM(m.home_team_goals)) AS SIGNED) AS 'goalsBalance',
  ROUND((SUM(CASE 
    WHEN m.away_team_goals > m.home_team_goals THEN 3
    WHEN m.away_team_goals = m.home_team_goals THEN 1
    ELSE 0 END) / (COUNT(*) * 3) * 100),2) AS 'efficiency'
  FROM TRYBE_FUTEBOL_CLUBE.teams as t

  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as m

  ON t.id = m.away_team_id

  WHERE m.in_progress = FALSE

  GROUP BY t.team_name

  ORDER BY 
    totalPoints DESC, 
    totalVictories DESC, 
    goalsBalance DESC, 
    goalsFavor DESC, 
    goalsOwn ASC;`,
};

export { generalStandingsQuery, standingsByReferenceQueries };
