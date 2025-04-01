'use client'

import { Tag } from '@/types/article'
import { Button } from '@/components/ui/button'
import { Tag as TagIcon } from 'lucide-react'

interface TagFilterProps {
	allTags: Tag[]
	onTagSelect: (selectedTag: string | null) => void
	selectedTag: string | null
}

// Separate component for tag buttons
function TagFilterButton({
	tag,
	isSelected,
	onClick,
}: {
	tag: Tag | null // null represents the "All Articles" button
	isSelected: boolean
	onClick: () => void
}) {
	return (
		<Button
			variant={isSelected ? 'default' : 'outline'}
			onClick={e => {
				e.preventDefault()
				onClick()
			}}
			className={`text-sm cursor-pointer ${isSelected ? 'shadow-xl border text-blue-500' : ''}`}
			size="sm"
			type="button"
		>
			{tag ? tag.name : 'All Articles'}
		</Button>
	)
}

export default function TagFilter({ allTags, onTagSelect, selectedTag }: TagFilterProps) {
	if (!allTags || allTags.length === 0) {
		return null
	}

	const handleAllClick = () => {
		onTagSelect(null)
	}

	const handleTagClick = (tagSlug: string) => {
		onTagSelect(tagSlug)
	}

	return (
		<div>
			<div className="flex items-center gap-2 mb-3">
				<TagIcon className="h-4 w-4 text-gray-600" />
				<h3 className="text-lg font-medium">Select a tag to filter articles</h3>
			</div>
			<div className="flex flex-wrap gap-2">
				<TagFilterButton
					tag={null}
					isSelected={selectedTag === null}
					onClick={handleAllClick}
				/>

				{allTags.map(tag => (
					<TagFilterButton
						key={tag.id}
						tag={tag}
						isSelected={selectedTag === tag.slug}
						onClick={() => handleTagClick(tag.slug)}
					/>
				))}
			</div>
		</div>
	)
}
