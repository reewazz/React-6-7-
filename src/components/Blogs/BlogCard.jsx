import { ArrowUpRight, Heart, MessageCircle, User } from "lucide-react";

export const BlogCard = ({ blog }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold capitalize text-slate-800 shadow-sm backdrop-blur">
            {blog?.category?.title}
          </span>
        </div>

        {/* Status */}
        {blog.status && (
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
              Published
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Author */}
        <div className="mb-3 flex items-center justify-end gap-2 text-sm text-slate-500">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
            <User size={15} />
          </div>

          <span className="font-medium capitalize">{blog.author}</span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Heart size={17} className="text-rose-500" />
              {blog.likes}
            </span>

            <span className="flex items-center gap-1.5">
              <MessageCircle size={17} />
              Comments
            </span>
          </div>

          {/* Read More */}
          <button className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all hover:gap-2.5">
            Read more
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};