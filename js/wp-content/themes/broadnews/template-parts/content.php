<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package BroadNews
 */

?>


<?php if (is_singular()) : ?>
    <div class="color-pad">
        <div class="entry-content read-details">

            <?php
            if (has_excerpt($post->ID)):

                ?>
                <div class="post-excerpt">
                    <?php echo wp_kses_post(get_the_excerpt($post->ID)); ?>
                </div>
            <?php endif; ?>

            <?php
            the_content(sprintf(
                wp_kses(
                /* translators: %s: Name of current post. Only visible to screen readers */
                    __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'broadnews'),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                ),
                get_the_title()
            )); ?>
            <?php if (is_single()): ?>
                <div class="post-item-metadata entry-meta">
                    <?php broadnews_post_item_tag(); ?>
                </div>
            <?php endif; ?>
            <?php
            $social_share_icon_opt = broadnews_get_option('single_post_social_share_view');
            if ($social_share_icon_opt == 'after-content') {
                broadnews_single_post_social_share_icons($post->ID);
            }
            ?>
            <?php

            // Previous/next post navigation.
            $previous_post = get_previous_post();
            $previous_post_thumb = '';
            if(isset($previous_post->ID)){
                $previous_post_thumb = broadnews_the_post_thumbnail('thumbnail', $previous_post->ID, true);
            }

            $next_post = get_next_post();
            $next_post_thumb = '';
            if(isset($next_post->ID)){
                $next_post_thumb = broadnews_the_post_thumbnail('thumbnail', $next_post->ID, true);
            }


            the_post_navigation(array(
                'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'broadnews' ) . '</span> ' .
                    '<span class="screen-reader-text">' . __( 'Next post:', 'broadnews' ) . '</span> ' .
                    '<h4><span class="post-title">%title</span></h4><span class="post-image">' . $next_post_thumb.'</span>',
                'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'broadnews' ) . '</span> ' .
                    '<span class="screen-reader-text">' . __( 'Previous post:', 'broadnews' ) . '</span> ' .
                    '<h4><span class="post-title">%title</span></h4><span class="post-image">' . $previous_post_thumb.'</span>',
                'in_same_term' => true,
                'taxonomy' => __('category', 'broadnews'),
                'screen_reader_text' => __('Continue Reading', 'broadnews'),
            ));


           

            ?>
            <?php wp_link_pages(array(
                'before' => '<div class="page-links">' . esc_html__('Pages:', 'broadnews'),
                'after' => '</div>',
            ));
            ?>
        </div><!-- .entry-content -->
    </div>
<?php else:



    do_action('broadnews_action_archive_layout');

endif;
