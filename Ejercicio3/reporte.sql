-- Buscamos los recibos en la fecha actual
WITH fecha_actual AS (
    SELECT *
    FROM invoice
    WHERE invoice_date >= CURRENT_DATE
),

-- Hacemos la relacion entre country, album e invoice
album_facturas AS(
	SELECT 
	    c.country,
		a.album_id,
	    a.title AS album_title,
		i.invoice_id,
		i.total
	FROM fecha_actual i
	JOIN customer c ON c.customer_id = i.customer_id
	JOIN invoice_line il ON i.invoice_id = il.invoice_id
	JOIN track t ON il.track_id = t.track_id
	JOIN album a ON t.album_id = a.album_id
	GROUP BY c.country, a.album_id, a.title, i.invoice_id, i.total
)	

--Agrupamos por country y album_title, contando los recibos, la suma y el promedio
SELECT
    country,
    album_title,
    COUNT(DISTINCT invoice_id) AS num_recibos,
    SUM(total) AS suma_total,
    AVG(total) AS promedio_por_album
FROM album_facturas
GROUP BY country, album_title
ORDER BY country, album_title;
