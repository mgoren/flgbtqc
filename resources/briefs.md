---
layout: minutes
title: Friend of the Court Briefs
permalink: /resources/briefs/
---

# Friends of the Court Briefs

We have been invited by the law firm [Kramer Levin](http://www.kramerlevin.com/probono/overview/) to participate as signatories to several friend of the court briefs in cases regarding the equal rights of LGBTQIA+ people in the United States. 

For more information on these cases and on our participation, please click [here](http://aquakerwitch.blogspot.co.uk/search/label/Kramer%20Levin).

The briefs we have participated in include the following. To read a brief, click on the link.

<br>

<ul id='briefs'>
  {% for brief in site.data.briefs %}
    <li><a href="{{brief.link}}">{{brief.title}}</a></li><br>
  {% endfor %}
</ul>
