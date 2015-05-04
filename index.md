---
layout: page
title: Strayegg
tagline: Simon Hookers ramblings
---

{% assign previous_year = 0 %}

{% for post in site.posts %}
	
	{% assign current_year = post.date | date: '%Y' %}

	{% if current_year != previous_year %}
		{% include post-year.html %}
		{% assign previous_year = current_year %}
	{% endif %}

	{% include post.html %}

{% endfor %}
