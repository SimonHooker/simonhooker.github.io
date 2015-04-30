---
layout: page
title: Strayegg
tagline: Simon Hookers ramblings
---
{% include JB/setup %}


{% if site.posts %}
  {% assign post = site.posts.first %}

  <div class="page-header">
    <h1>{{ post.title }} {% if post.tagline %}<small>{{post.tagline}}</small>{% endif %}</h1>
  </div>
  <div class="row post-full">
    <div class="col-xs-12">
      <div class="date">
        <span>{{ post.date | date_to_long_string }}</span>
      </div>
      <div class="content">
        {{ post.content }}
      </div>

    {% unless post.tags == empty %}
      <ul class="tag_box inline">
        <li><i class="glyphicon glyphicon-tags"></i></li>
        {% assign tags_list = post.tags %}
        {% include JB/tags_list %}
      </ul>
    {% endunless %}  
    

    </div>
  </div>
{% endif %}

{% for checking_for_more in site.posts offset:1 limit:1 %}
  
## Slightly older posts

  <ul class="posts">
    {% for post in site.posts offset:1 limit:10 %}


      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}