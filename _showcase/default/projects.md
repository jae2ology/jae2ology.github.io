---
show: true
width: 6
date: 2026-10-20 00:00:00 +0800
---
<div class="m-4">
    <h5>Featured Projects</h5>
    <ul class="list-unstyled mb-1">
        {% for item in site.data.profile.projects %}
        <li class="media mb-3">
            <img src="{{ item.logo | relative_url }}" alt="{{ item.name }}" style="width: 18px;" class="mr-1 mt-1">
            <div class="media-body">
                <div class="font-weight-bold">
                    {% if item.link %}
                        <a href="{{ item.link }}" target="_blank" rel="noopener">{{ item.name }}</a>
                    {% else %}
                        {{ item.name }}
                    {% endif %}
                </div>
                <div class="small text-muted mb-1">{{ item.desc }}</div>
                <div class="small d-flex">
                    <div class="badge badge-light text-wrap pl-0 text-left">{{ item.tech }}</div>
                    <div class="mt-auto ml-auto no-break"><em>{{ item.date }}</em></div>
                </div>
            </div>
        </li>
        {% endfor %}
    </ul>
</div>