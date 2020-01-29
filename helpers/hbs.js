module.exports = {
    activePage: function (topic) {
        if (topic == "all") {
            return `<ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link active" id="all" href="/ideas/">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="sports" href="/ideas/sports">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tech" href="/ideas/tech">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="video" href="/ideas/video">Video</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="gaming" href="/ideas/gaming">Gaming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="other" href="/ideas/other">Others</a>
            </li>
        </ul>`;
        } else if (topic == "sports") {
            return `<ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link" id="all" href="/ideas/">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" id="sports" href="/ideas/sports">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tech" href="/ideas/tech">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="video" href="/ideas/video">Video</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="gaming" href="/ideas/gaming">Gaming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="other" href="/ideas/other">Others</a>
            </li>
        
        </ul>`;
        } else if (topic == "video") {
            return `<ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link" id="all" href="/ideas/">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="sports" href="/ideas/sports">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tech" href="/ideas/tech">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" id="video" href="/ideas/video">Video</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="gaming" href="/ideas/gaming">Gaming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="other" href="/ideas/other">Others</a>
            </li>
        
        </ul>`;
        } else if (topic == "tech") {
            return `<ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link" id="all" href="/ideas/">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="sports" href="/ideas/sports">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" id="tech" href="/ideas/tech">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="video" href="/ideas/video">Video</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="gaming" href="/ideas/gaming">Gaming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="other" href="/ideas/other">Others</a>
            </li>
        
        </ul>`;
        } else if (topic == "gaming") {
            return `<ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link" id="all" href="/ideas/">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="sports" href="/ideas/sports">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tech" href="/ideas/tech">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="video" href="/ideas/video">Video</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" id="gaming" href="/ideas/gaming">Gaming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="other" href="/ideas/other">Others</a>
            </li>
        
        </ul>`;
        } else {
            return `<ul class="nav nav-tabs mb-3">
            <li class="nav-item">
                <a class="nav-link" id="all" href="/ideas/">All</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="sports" href="/ideas/sports">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tech" href="/ideas/tech">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="video" href="/ideas/video">Video</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="gaming" href="/ideas/gaming">Gaming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" id="other" href="/ideas/other">Others</a>
            </li>
         </ul>`;
        }
    },
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {
            var new_str = str + " ";
            new_str = str.substr(0, len);
            new_str = str.substr(0, new_str.lastIndexOf(" "));
            new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
            return new_str + "..."
        }
        return str;
    },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, ' ');
    },
    commentRatingUp: function (user, thumbs) {
        if (thumbs.indexOf(user.username) > -1) {

            return "color : green ";
        }
        return "";
    },
    commentRatingDown: function (user, thumbs) {

        if (thumbs.indexOf(user.username) > -1) {

            return "color:red";
        }
        return "";
    },
    isCommentOwner: function (user, author) {
        if (user.username == author.username) {
            return `<p class="text-left"> <i class="fas px-3 fa-edit edit-comment"></i> <i
            class="fas fa-trash-alt delete-comment"></i></p>`;
        }
        return ""
    }

}