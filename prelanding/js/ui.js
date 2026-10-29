
    document.addEventListener('DOMContentLoaded', function () {
        var dd = String(new Date().getDate()).padStart(2, '0');
        var mm = String(new Date().getMonth() + 1).padStart(2, '0');
        var yyyy = new Date().getFullYear();
        var today = dd + '.' + mm + '.' + yyyy;
        document.querySelectorAll('.js-current-date').forEach(function (el) {
            el.textContent = today;
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        var comments = document.querySelectorAll('.fb-comments-wrapper');

        function fadeInElement(element, duration) {
            var start = null;

            function step(timestamp) {
                if (!start) start = timestamp;
                var progress = timestamp - start;
                element.style.opacity = progress / duration;
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        }

        function displayCommentsSequentially(index) {
            if (index >= comments.length) {
                return;
            }

            var comment = comments[index];
            comment.style.display = 'block';
            fadeInElement(comment, 500); // 500 миллисекунд для анимации появления

            if (index > 0) {
                comments[index - 1].parentNode.insertBefore(comment, comments[index - 1]);
            }

            setTimeout(function () {
                displayCommentsSequentially(index + 1);
            }, 10000); // 10 секунд задержки
        }

        displayCommentsSequentially(0);
    });
